## Git commands

- `git checkout HEAD filename`: Discards changes in the working directory.
- `git reset HEAD filename`: Unstages file changes in the staging area.
- `git reset commit_SHA`: Resets to a previous commit in your commit history.
- `git log` shows all the commits, you need the 7 first letters of a sha to rewind. {--oneline shows the list of commits in one line format. -S "keyword" displays a list of commits that contain the keyword in the message. {git log -S "Add" to find any commits with “Add” in the message. {git log --oneline --graph - --graph --oneline
- `git log --graph --decorate --oneline --all` to see a detailed version of the log
- `git stash` allows you to get back to a clean commit point with a synchronized working tree, and avoid losing your local changes in the process. git stash pop unstashes it
- `git commit --amend` adds to the last commit, ammended, to repair something. You can update the message or git commit --amend --no-edit to not edit the commit msg
- `git config --global alias.co "checkout"`: create an alias, for ex: makes co an alias for checkout)
- `git branch` to check the current branch, and add an optional name to create new name branch
- `git checkout branch_name` to switch to the new branch
- `git merge branch_name` will merge branch_name into the current branch
- `git branch -d branch_name` to delete the branch once the work is over
- `git clone remote_location clone_name` to clone a remote repository
- `git remote -v` shows the remote repository origin (from where it comes)
- `git fetch` shows the changes on a remote branch
- `git merge origin/main` will merge the remote changes to the local branch
- `git pull` runs fetch and merge automatically
- `git push origin local_branch_name` will push the changes to origin (remote) from you branch. git push origin main will push main
