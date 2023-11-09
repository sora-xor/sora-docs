# How to Contribute?

To suggest modifications to the documentation, you will need to create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the `develop` branch in this repository.

## Open a Pull Request

There are multiple ways to initiate a pull request.

**Option 1**: You can directly open a pull request in Github. To find the content you want to edit, click on the `Edit this page` button located at the bottom of every page. Once you click on it, you will be taken to the corresponding Markdown file where you can make your changes.

**Option 2**: You can [push](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository) your changes from the [local repository](#build-locally) if you prefer to test the final view before submitting your changes.

To make your contributions more visually appealing, we recommend using the Vitepress [Markdown extensions](https://vitepress.dev/guide/markdown).

## Review Process

After you've opened a pull request, it will be [reviewed](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) by multiple members of the community before it can be merged into the main branch.

Note the following:

1. Each pull request requires at least two approvals.
2. The Vercel bot attempts to build the documentation based on the proposed changes. If the build fails, the pull request cannot be merged.

Once the review process is complete and the pull request is merged, the changes will be automatically applied.

## Build Locally

To build documentation locally, follow these steps:

1. Clone the repository:

    ```bash
    https://github.com/sora-xor/sora-docs.git
    ```

2. Install the dependencies:

    ```bash
    npm ci
    ```

3. Run a command that will start a local dev server:

    ```bash
    npm run docs:dev
    ```

Once you've started the development server, you can view the documentation site in your browser by navigating to http://localhost:5173.

test
