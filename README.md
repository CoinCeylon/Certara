# Certara: Revolutionize Your Certificates With Blockchain-Backed Authencity

<br>

## Getting Started

The essential procedures required for initiating and configuring the project within your local environment.

### Prerequisites

1. Upgrade the Bun Package Manager to the latest release version.

    ```sh
    bun upgrade
    ```

### Installation

1. Clone the repository and retrieve it on the local machine.

    ```sh
    git clone https://github.com/CoinCeylon/Certara.git
    ```

2. Navigate your frontend folder directory.

    ```sh
    cd frontend
    ```

3. Install the required Node Package Manager (npm) packages and dependencies.

   ```sh
   npm install
   ```

4. Enter your environmental variables within the `.env` file. Use the `.env.sample` file as a reference.

    ```js
    MONGODB_URI= "Enter Your MongoDB Connection URL"

    ADMIN_EMAIL= "Enter Your Admin Email Address"
    ADMIN_PASSWORD= "Enter Your Admin Password"

    EMAIL_ADDRESS= "Enter Your Email Address For One Time OTPs (One Time Password)"
    EMAIL_PASSWORD= "Enter Your Generated Random String As Your Email Password"

    NEXT_PUBLIC_BLOCKFROST_PROJECT_ID= "Enter Your BlockFrost Project Identification For Cardano API Access"
    ```

5. Launch the application via localhost, and then access it through the browser.

   ```sh
   npm run dev
   ```

## License

This repository is distributed under the Apache 2.0 License. See `LICENSE` for additional information.