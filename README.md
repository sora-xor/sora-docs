# SORA documentation

A central repository that contains documentation for [SORA](https://sora.org/). Whether you're a beginner or an advanced user of blockchain technology, or a developer, you'll find something useful there.

# How to contribute?

To suggest modifications to the live documentation, you will need to create a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the `develop` branch in this repository.

There are multiple ways to initiate a pull request.

**Option 1**: You can directly open a pull request in Github. To find the content you want to edit, click on the `Edit this page` button located at the bottom of every page. This button looks like this:

![](src/.gitbook/assets/editThisPage.png)

Once you click on it, you will be taken to the corresponding Markdown file where you can make your changes.

**Option 2**: You can [push](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository) your changes from the [local repository](#run-locally) if you prefer to test the final view before submitting your changes.

After you've opened the pull request, it will be [reviewed](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) by multiple members of the community before it can be merged into the main branch. Once the review process is complete, the changes will be automatically applied.

To make your contributions more visually appealing, we recommend following the Vitepress [Markdown extensions](https://vitepress.dev/guide/markdown).

# Run locally

**Step 1.** Clone the repository using the following command:

```bash
https://github.com/sora-xor/sora-docs.git
```

**Step 2.** Install the dependencies:

```bash
npm ci
```

**Step 3.** Run a command that will start a local dev server:

```bash
npm run docs:dev
```

Once you've started the development server, you can view the documentation site in your browser by navigating to http://localhost:5173.
