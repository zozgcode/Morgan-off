import { Account } from "@/utils/types";

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Anthony',
      lastName: 'Adrian',
      jointNames: 'Anthony Adrian & Thomas Work',
      username: 'Adrianwork01-0000054546500000000',
      password: 'Thankful-0000054546500000000',
    },
    bank_details: {
      bank_name: 'Bank of Springfield',
      branch: 'Main Branch',
      account_number: '23232932732',
      routing_number: '623623636',
      swift_code: 'BOSUS33',
      account_type: 'Checking',
      balance_usd: 3823000,
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'March 23, 2024 - 3:32:32 am',
        description: "Deposit - INHERITANCE",
        status: "Success",
        amount_usd: 3823000,
        account_no: "****5009",
      },
    ],
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Leslie',
      lastName: 'Ribey',
      jointNames: '',
      username: 'LesRi228',
      password: 'Thankfules',
    },
    bank_details: {
      bank_name: 'Bank of Springfield',
      branch: 'Main Branch',
      account_number: '23232932732',
      routing_number: '623623636',
      swift_code: 'BOSUS33',
      account_type: 'Checking',
      balance_usd: 800000000,
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 13, 2024 - 3:32:32 am',
        description: "Deposit - INHERITANCE",
        status: "Success",
        amount_usd: 800000000,
        account_no: "****5009",
      },
    ],
  },
];
