# Debug tool feedbacks

A static Feedback and Bug Report board designed for GitHub Pages with a shared-password gate, a separate administrator mode, editable nicknames, description-only submissions, owner deletion, and separate upvote/downvote totals. Each browser identity can choose an upvote, a downvote, or no vote for each item, but never both. Supabase provides anonymous identity, server-side password verification, administrator authorization, and persistent records.

## Preview locally

Serve this folder with any static file server. When Supabase is not configured, the app stores feedback in the browser so the complete flow can be previewed immediately.

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Connect Supabase

1. Create a Supabase project.
2. Open **SQL Editor**, paste `supabase/schema.sql`, and run it.
3. Open **Authentication → Providers → Anonymous Sign-Ins** and enable anonymous sign-ins.
4. Copy the project URL and publishable key from the project's **Connect** dialog.
5. Set the shared password from the SQL Editor without committing it to Git:

```sql
insert into private.feedback_access_config (id, password_hash, updated_at)
values (true, extensions.crypt('<new-password>', extensions.gen_salt('bf', 12)), now())
on conflict (id) do update
set password_hash = excluded.password_hash,
    updated_at = excluded.updated_at;
```

6. Set a separate administrator password:

```sql
insert into private.feedback_admin_config (id, password_hash, updated_at)
values (true, extensions.crypt('<admin-password>', extensions.gen_salt('bf', 12)), now())
on conflict (id) do update
set password_hash = excluded.password_hash,
    updated_at = excluded.updated_at;

delete from public.feedback_admin_access;
```

For local testing, replace the placeholders in `config.js`. Never put a `service_role` key in this site.

## Deploy with GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch.
2. In **Settings → Pages → Build and deployment**, select **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder, then save.
4. Add the Supabase project URL and publishable key to `config.js`.

The Supabase publishable key is designed for browser use. The Row Level Security policies in `supabase/schema.sql` are what protect the data.

The password is verified inside Postgres and is never stored in the site source. Five failed attempts lock that browser identity for 15 minutes. Existing authorized browsers stay authorized until their row is removed from `public.feedback_access`.

Administrator mode uses a separate server-side password and lockout counter. An administrator can delete any individual feedback item or clear the full board. Changing the administrator password should also clear `public.feedback_admin_access` so previously authorized browsers must authenticate again.

## Vote identity limitation

The database primary key `(feedback_id, user_id)` prevents duplicate votes for the same anonymous user. The anonymous session survives reloads and browser restarts, but clearing site data or changing browsers creates a new identity. Use GitHub OAuth instead of anonymous sign-in if strict one-person-one-vote enforcement is required.
