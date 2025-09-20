First push via git command lines, Starting to understand repositories.

Pushed this entire code from git command lines.

git init -- initialize a repository (hidden repo)(.git - hidden folder name), in my project folder/ working directory.

git status -- shows the status of the files (U - Untracked, A - Staging Area, (No letters) - no local repo/ already commit).

git add (git add (file name) - specific file, git add . - all file) -- adds to the staging area before on the local repository.

git commit -m 'Comment' -- after working directory, staging area, next is to commit to the local repository.

(Before you can push to the remote repository, You'll need the GitHub credentials and where repository folder to be added in the remote repository.)

git push -u (remote repository name (main)) -- push the files from local repo to remote repo (GitHub Acc) (-u (name) will be unnecessary once pushed on that repo for the first time).

(IF Update happens - backtrack to git add to move the update from working directory to the staging area, then commit, If finalized.)

More Commands such as..
git branch -m (old name) (new name) -- changes the branch name.

git check out (branch name) -- moves the user to that branch.

git fetch -- Downloads new changes from the remote but doesn't apply them yet.

git merge -- Combines the fetched changes into your local branch.

git pull origin (branch name) -- Does both fetch and merge in one step.

git remote add (origin/any name) (github link).

-> Tracks local commits.

git show--name-only (commit name/code, that was given after commiting locally.)
git log --oneline

Additional Infos:
- To commit in repositories (local/remote), we need to set up a profile name and email. Otherwise git will ask who you are.
- Commit can work w any emails, BUT keep in mind you can't commit remotely, If the email isnt connected to the github. 
- The user name also needs to be set up, or the terminal will use your default system username.
- Global set ups name and email affects, ALL the repositories. (--global)

git config () user.name "Shuabru" -- Sets up the user's name in local repositories, can have multiple names for different repositories. ADD --config in the parenthesis(remove the parenthesis after) if you want to declare globally.

git config () user.mail "Shubaru@gmail.com" -- Sets up the user's email in local repositories, can have multiple emails for different repositories. ADD --config in the parenthesis(remove the parenthesis after) if you want to declare globally.
