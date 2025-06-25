# Contributing:

## 🚀 Getting Started

1.  ### Install `pre-commit`

    This Python tool manages our Git hooks.

    ```bash
    pip install pre-commit
    ```

2.  ### Install `pre-commit` Hooks Locally

    This command activates the hooks defined in our `.pre-commit-config.yaml` file for your repository.

    ```bash
    pre-commit install
    ```

3.  ### Install `detect-secrets` (IBM Fork) & Handle Detections

    This is the core tool we use for secret detection. Once installed, it will help you manage potential secrets.

    ```bash
    pip install "git+[https://github.com/ibm/detect-secrets.git@master#egg=detect-secrets](https://github.com/ibm/detect-secrets.git@master#egg=detect-secrets)"
    ```

    **⚠️ Warning: How to Handle Secret Detections**

    If your `pre-commit` hook fails, or if a `detect-secrets scan` command shows potential secrets, follow these steps:

    a. **Run a Baseline Scan with Exclusions:**
    This command scans your entire codebase, applies our predefined exclusions (like `node_modules`, build outputs, etc.), and updates your `.secrets.baseline` file with any new findings. This is essential to bring your local baseline up-to-date.

    ```bash
    detect-secrets scan --all-files --exclude-files '.*node_modules/.*|.*package-lock\.json|.*yarn\\.lock|.*\\.next/.*|.*build/.*|.*out/.*|.*dist/.*|.*\\.git/.*|.*\\.env.*|.*\\.prettierrc\\.mjs|.*\\.prettierrc\\.js|.*.*gitleaks\\.toml|.*\\.secrets\\.baseline|.*\\.github/workflows/.*|^\\.secrets\\.baseline$' --update .secrets.baseline .
    ```

    b. **Audit Your Baseline:**
    After the scan updates your `.secrets.baseline`, you **must audit** any newly detected secrets. This is an interactive process where you review each potential secret and decide if it's a **true positive** (a real secret that needs removal and revocation) or a **false positive** (something that looks like a secret but isn't).

    ```bash
    detect-secrets audit .secrets.baseline
    ```

    Follow the prompts in your terminal. For false positives, you can mark them as such. For true positives, ensure they are removed from your code and revoked from their source.

    c. **Commit the Updated Baseline:**
    Once you've audited the secrets, **commit the updated `.secrets.baseline` file** to the repository. This ensures that the pipeline and other developers are aware of these findings.

---

## 🛠️ Recommended VS Code Extensions

For a smoother development experience and to align with our code quality standards, we recommend installing the following VS Code extensions:

- **ESLint**: Integrates ESLint directly into VS Code, showing linting errors and warnings in real-time.
- **Error Lens**: Highlights errors, warnings, and other diagnostics directly in the code line.
- **Prettier - Code formatter**: Formats your code automatically.
  - **Setup**: After installing, open your VS Code settings (Cmd/Ctrl + ,) and search for `Format On Save`. Make sure it's **enabled**.
  - **Prettier Print Width**: To match our project's formatting, go to VS Code settings, search for `Prettier: Print Width`, and set it to `120`.
- **Pretty TypeScript Errors**: Makes TypeScript errors more readable and actionable in the editor.
