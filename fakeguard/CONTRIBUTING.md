# Contributing to FakeGuard

Thank you for your interest in contributing to FakeGuard! We welcome contributions from developers, designers, and researchers.

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Report issues responsibly

## How to Contribute

### 1. Report Bugs

Found a bug? Please create an issue:

1. Go to [Issues](https://github.com/fakeguard/platform/issues)
2. Click "New Issue"
3. Use the bug report template
4. Provide:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment (OS, browser, Node version, etc.)
   - Screenshots/logs if applicable

### 2. Suggest Features

Have an idea? We'd love to hear it!

1. Go to [Issues](https://github.com/fakeguard/platform/issues)
2. Click "New Issue"
3. Use the feature request template
4. Explain:
   - What you want to build
   - Why it's useful
   - How it could work
   - Any examples or references

### 3. Submit Code

#### Setup Development Environment

```bash
# Clone repository
git clone https://github.com/fakeguard/platform.git
cd fakeguard

# Setup frontend
cd frontend
npm install

# Setup backend
cd ../backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

#### Workflow

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make Changes**
   - Follow code style (see below)
   - Write tests for new features
   - Update documentation
   - Keep commits atomic and meaningful

3. **Test Your Changes**
   ```bash
   # Backend tests
   cd backend
   pytest test_api.py -v

   # Frontend tests
   cd frontend
   npm test
   ```

4. **Lint Your Code**
   ```bash
   # Backend
   pylint backend/main.py
   flake8 backend/

   # Frontend
   cd frontend
   npm run lint
   ```

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add feature X" # Use conventional commits
   ```

6. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Create PR on GitHub
   - Link related issues
   - Describe changes clearly
   - Request reviewers

### 4. Documentation

Help improve documentation:

- Fix typos or improve clarity
- Add examples or tutorials
- Translate documentation
- Create architecture diagrams
- Add API documentation

## Code Style Guidelines

### Python (Backend)

```python
# Follow PEP 8 style guide
# Use type hints where possible

def predict(text: str) -> dict:
    """
    Predict if text is real or fake news.
    
    Args:
        text: News article text
        
    Returns:
        Dictionary with prediction results
    """
    # Implementation
    pass
```

- Line length: Max 100 characters
- Use descriptive variable names
- Add docstrings to functions/classes
- Use type hints for function arguments/returns

### JavaScript/React (Frontend)

```javascript
// Use camelCase for variables and functions
// Use PascalCase for components
// Use arrow functions where appropriate

// Good
const MyComponent = ({ text }) => {
  const [result, setResult] = useState(null);
  
  return <div>{result}</div>;
};

// Bad
const myComponent = (props) => {
  // Implementation
};
```

- Use functional components with hooks
- Prop validation with PropTypes or TypeScript
- Meaningful component names
- JSX formatting

### CSS

```css
/* Use CSS custom properties */
.button {
  background-color: var(--primary-color);
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
}

/* Mobile-first approach */
@media (min-width: 768px) {
  .button {
    padding: var(--spacing-lg);
  }
}
```

- Use CSS variables for colors/spacing
- Mobile-first responsive design
- Meaningful class names
- Group related properties

## Commit Message Convention

Use conventional commits:

```
feat: add new feature
fix: fix bug
docs: update documentation
style: format code
refactor: refactor code
test: add tests
chore: update dependencies
ci: update CI/CD
```

Examples:
- `feat: add URL detection endpoint`
- `fix: correct prediction confidence calculation`
- `docs: add API documentation`
- `test: add tests for prediction endpoint`

## Pull Request Process

1. **Before Submitting**
   - [ ] Tests pass locally
   - [ ] No linting errors
   - [ ] Documentation updated
   - [ ] Commits are clean
   - [ ] No unrelated changes

2. **PR Description**
   ```markdown
   ## Description
   Brief description of changes
   
   ## Related Issues
   Fixes #123
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update
   
   ## Testing
   How to test these changes
   
   ## Checklist
   - [ ] Tests added
   - [ ] Documentation updated
   - [ ] Code reviewed
   ```

3. **Code Review**
   - Address feedback respectfully
   - Make requested changes
   - Re-request review when ready

4. **Merge**
   - Project maintainers merge approved PRs
   - Your contribution is deployed!

## Development Best Practices

### Frontend

- ✓ Use functional components and hooks
- ✓ Keep components small and focused
- ✓ Use React Router for navigation
- ✓ Handle loading and error states
- ✓ Test user interactions
- ✓ Validate form inputs
- ✓ Use sessionStorage for temporary data

### Backend

- ✓ Use type hints and validation
- ✓ Write docstrings for functions
- ✓ Handle errors gracefully
- ✓ Log important events
- ✓ Write unit tests
- ✓ Follow REST conventions
- ✓ Validate all inputs

### DevOps

- ✓ Update Docker images
- ✓ Test in Docker locally
- ✓ Keep dependencies updated
- ✓ Document infrastructure changes
- ✓ Security scanning passes
- ✓ CI/CD workflow checks pass

## Getting Help

- **Discord**: [Join community](https://discord.gg/fakeguard)
- **Discussions**: [GitHub Discussions](https://github.com/fakeguard/platform/discussions)
- **Email**: dev@fakeguard.ai
- **Issues**: Open an issue with `question` label

## Recognition

Contributors are recognized in:
- [CONTRIBUTORS.md](./CONTRIBUTORS.md)
- Release notes
- GitHub insights page
- Monthly newsletter

## Financial Contributions

Want to support FakeGuard?
- [GitHub Sponsors](https://github.com/sponsors/fakeguard)
- [Open Collective](https://opencollective.com/fakeguard)
- [Patreon](https://patreon.com/fakeguard)

## Legal

By contributing, you agree that:
- Your contributions are under the MIT license
- You have the right to contribute the code
- You understand the project uses your contributions

## Project Governance

- **Lead Maintainer**: [Name/Team]
- **Core Contributors**: Listed in CONTRIBUTORS.md
- **Decision Making**: Consensus in team meetings

## Roadmap

### Q1 2025
- [ ] Prototype v1.0 complete
- [ ] Initial community feedback

### Q2-Q3 2025
- [ ] Multi-language support
- [ ] URL detection feature
- [ ] Mobile app

### Q4 2025 & Beyond
- [ ] Advanced fact-checking
- [ ] Browser extension
- [ ] Enterprise features

See [ROADMAP.md](./ROADMAP.md) for detailed timeline.

## FAQ

**Q: Do I need to sign a CLA?**
A: Not for small contributions. Large PRs may require a CLA.

**Q: Can I work on issues labeled "good first issue"?**
A: Yes! These are great starting points.

**Q: How long until my PR gets reviewed?**
A: Typically 2-7 days depending on complexity.

**Q: Can I work on a feature in progress?**
A: Comment on the issue to coordinate with others.

**Q: How do I report security vulnerabilities?**
A: Email security@fakeguard.ai (do not open public issue).

---

Thank you for contributing to FakeGuard! Together, we're making the internet more truthful. 🎉
