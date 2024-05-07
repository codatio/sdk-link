# sdk-link

Authorization is a key part of any solution built with Codat. Each of your SMB customers must authorize access to their data before you can use that data. A frictionless and reassuring auth flow is essential for receiving the authorization from your SMB customers.

To achieve this, use our Link SDK component and embed our Link auth flow in your application.

## Configure your auth flow

Our Link settings allow you to configure the authorization process based on your data needs and white-label Embedded Link to suit your brand. You can customize these settings in the [Codat Portal](https://app.codat.io/) in [Settings > Auth flow > Link](https://app.codat.io/settings/link-settings).

Refer to our documentation to see how you can [customize Embedded Link](https://docs.codat.io/auth-flow/customize/customize-link).

## Prerequisites

<h3 id='create-company'>Create a new company</h2>

These examples require you to have previously created a company and retrieved its `companyId`. For purposes of sample projects, you can do this via [Portal](https://app.codat.io/). In your Codat solution, you would do it via our [API](https://docs.codat.io/codat-api#/operations/create-company).

Visit <a href="https://app.codat.io/companies" target="_blank">codat.io/companies</a>

![Create Company](./public/new-company.png "Create New Company")

1. Click the **Create company** button.
2. Fill in the form in an open modal and submit it via the **Add company** button.
3. Copy `Company ID` by clicking on the **Copy to clipboard** icon.
