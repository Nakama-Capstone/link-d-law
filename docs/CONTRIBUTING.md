# Contribute Guide
- clone this repo
    ```bash
    git clone https://github.com/Nakama-Capstone/link-d-law.git
    ```
- change directory to project root
    ```bash
    cd link-d-law
    ```
- create new branch from `main` branch depends on learning path and context of scope of work
    ```bash
    git checkout -b dev/cc/feat/authentication

    # or another example
    git checkout -b dev/md/feat/splash-screen

    # or another example
    git checkout -b dev/ml/feat/training-model
    ```
- do your work
- commit your work
    ```bash
    git add .
    git commit -m "feat: add authentication"
    ```
- push your work to remote
    ```bash
    git push origin dev/cc/feat/authentication
    ```
- create pull request to `dev` branch
- wait for review and merge
- after merge, delete your branch
    ```bash
    git branch -d dev/cc/feat/authentication
    ```
- nice work! thank you for your contribution