# Debug tool feedbacks

A static feedback board designed for GitHub Pages with editable nicknames, description-only submissions, owner-only deletion, and one upvote or downvote per browser identity. Supabase provides anonymous identity and persistent feedback.

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

For local testing, replace the placeholders in `config.js`. Never put a `service_role` key in this site.

## Deploy with GitHub Pages

1. Create a GitHub repository and push this folder to its `main` branch.
2. In **Settings → Pages → Build and deployment**, select **Deploy from a branch**.
3. Select the `main` branch and the `/ (root)` folder, then save.
4. Add the Supabase project URL and publishable key to `config.js`.

The Supabase publishable key is designed for browser use. The Row Level Security policies in `supabase/schema.sql` are what protect the data.

## Vote identity limitation

The database primary key `(feedback_id, user_id)` prevents duplicate votes for the same anonymous user. The anonymous session survives reloads and browser restarts, but clearing site data or changing browsers creates a new identity. Use GitHub OAuth instead of anonymous sign-in if strict one-person-one-vote enforcement is required.
