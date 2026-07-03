// CSS Variables configuration
const kindeVariables = {
  baseFontFamily:
    "-apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif",
  controlSelectTextBorderRadius: "6px",
  buttonPrimaryBackgroundColor: "#1d2331",
  buttonPrimaryColor: "#fff",
  buttonBorderRadius: "6px",
  buttonSecondaryBackgroundColor: "#fff",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#e9edec",
  buttonSecondaryBorderStyle: "solid",
  buttonSecondaryBorderRadius: "6px",
} as const;

export const getStyles = (): string => `
  :root {
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-control-select-text-border-radius: ${kindeVariables.controlSelectTextBorderRadius};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-button-secondary-background-color: ${kindeVariables.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-border-width: ${kindeVariables.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${kindeVariables.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${kindeVariables.buttonSecondaryBorderStyle};
    --kinde-button-secondary-border-radius: ${kindeVariables.buttonSecondaryBorderRadius};
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #eeeff1;
    font-family: var(--kinde-base-font-family);
  }

  [data-kinde-choice-separator] {
    text-transform: uppercase;
  }

  [data-kinde-layout-auth-buttons] { 
    display: flex;
    justify-content: center;
  }

  [data-kinde-layout-auth-buttons-item] {
    width: 3rem;
    height: 3rem;
  }

  /* Custom input styling to match image */
  input[type="text"],
  input[type="password"],
  input[type="email"] {
    border: 1px solid #d1d5db !important;
    border-radius: 6px !important;
    padding: 0.75rem !important;
    font-size: 1rem !important;
    color: #374151 !important;
    width: 100%;
    box-sizing: border-box;
  }

  /* Input focus states */
  input[type="text"]:focus,
  input[type="password"]:focus,
  input[type="email"]:focus {
    outline: none !important;
    border-color: #9ca3af !important;
  }

  label {
    font-size: 0.875rem !important;
    color: #374151 !important;
    margin-bottom: 0.5rem !important;
    display: inline-block;
  }
  
  /* Required asterisk color */
  label span {
    color: #ef4444 !important;
  }

  button[type="submit"] {
    padding: 0.75rem !important;
    font-size: 1rem !important;
    font-weight: 500 !important;
    width: 100%;
    cursor: pointer;
  }

  /* Reset password link */
  a {
    color: #4b5563 !important;
    text-decoration: underline !important;
    font-size: 0.875rem !important;
    margin-bottom: 1.5rem !important;
    display: inline-block !important;
  }
`;
