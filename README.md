# WhatShell - Execute Commands on your System Remotely using WhatsApp Messages

WhatShell allows you to execute commands on your system remotely using WhatsApp messages this allows you to control your system even when you are away from it and stay updated with the commands output on your WhatsApp account.

## Requirements

To use this tool, you will need the following:

- Two WhatsApp accounts. One that will be used to receive messages and the other that will be used to send commands.
- Node.js installed on your System.

## Installation

You can install this tool by following these steps:

1. Clone the repository using the command `git clone https://github.com/tauh33dkhan/WhatShell.git`.
2. Install the necessary dependencies using the command `npm install`.
3. Add your WhatsApp phone number in the `.env` file from which you will send messages.
4. Run the tool using the command `node whatshell.js`.
5. Login to your WhatsApp account using the phone number that will receive the messages by scanning the QR code.

## Usage

Follow these simple steps to use WhatShell:

1. Send a WhatsApp message from the number specified in the `.env` file with the command you want to execute. For example: `/ls`.
2. The tool will execute the command on your VPS and return the output to your specified WhatsApp account.

## Contributing

We welcome and appreciate contributions to this project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes to your forked repository.
4. Push your changes back to GitHub.
5. Create a pull request.

## Contact

If you have any questions, suggestions, or issues, you can reach out to me on twitter @tauh33dkhan

Thank you for using WhatShell!
