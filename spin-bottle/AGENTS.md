<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the imported Spin Bottle game on the index route with shared game controls and global game styling, preserving the uploaded experience.
- Music search runs through a server function calling the YouTube Data API; the key is read from YOUTUBE_API_KEY or the server-only youtube-config file so it never reaches the browser.
- Serve imported game media through project asset pointers so uploaded binaries stay out of the source tree.
