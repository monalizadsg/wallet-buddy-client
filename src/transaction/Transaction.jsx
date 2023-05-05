import {
  Heading,
  Button,
  Text,
  Progress,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import "./Transaction.scss";
import React from "react";

const transactionData = [
  {
    id: 1,
    name: "Burger and chips",
    category: "Food",
    amount: 5,
    date: "March 25, 2023",
  },
  {
    id: 2,
    name: "Hydro (May 2023)",
    category: "Hydro",
    amount: 50,
    date: "March 25, 2023",
  },
  {
    id: 3,
    name: "ProtonVPN",
    category: "Subscription",
    amount: 13,
    date: "March 26, 2023",
  },
  {
    id: 4,
    name: "Rental Fee (May)",
    category: "Rent",
    amount: 1750,
    date: "March 26, 2023",
  },
];

const dataByDate = transactionData.reduce((group, item) => {
  const { date } = item;
  group[date] = group[date] ?? [];
  group[date].push(item);
  return group;
}, {});

function Transaction() {
  return (
    <div className='transaction-container'>
      <div className='left-col'>
        <div className='title'>
          <Heading as='h4' size='md'>
            Transactions
          </Heading>
          <Button colorScheme='teal' variant='outline' size='xs'>
            Add
          </Button>
        </div>
        <div className='content'>
          <div>
            {Object.entries(dataByDate).map(([date, values], index) => {
              return (
                <React.Fragment key={index}>
                  <div className='date'>{date}</div>
                  {values.map((item, index) => {
                    return (
                      <div className='item' key={index}>
                        <div className='item-details'>
                          <span className='icon'></span>
                          <div>
                            <Text fontSize='sm'>{item.name}</Text>
                            <Text fontSize='xs'>{item.category}</Text>
                          </div>
                        </div>
                        <div className='item-amount'>
                          <Text fontSize='sm'>
                            {`$${item.amount.toFixed(2)}`}
                          </Text>
                        </div>
                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <div className='right-col'>
        <div className='row'>
          <div className='title'>
            <Heading as='h4' size='md'>
              Spending Limits
            </Heading>
            <Button colorScheme='teal' variant='outline' size='xs'>
              Edit
            </Button>
          </div>
          <div className='content'>
            <Text fontSize='sm'>Monthly Transaction Limit</Text>
            <Text fontSize='sm'>
              <span>$1,540.00</span> of $1,600.00
            </Text>
            <div>
              <Progress value={80} /> <span>80%</span>
            </div>

            {/* TODO: show only alert text if almost reach the limit*/}
            <Alert status='error' className='alert-msg'>
              <AlertIcon />
              Your spending limit has almost reached the limit
            </Alert>
          </div>
        </div>
        <div className='row'>
          <div className='title'>
            <Heading as='h4' size='md'>
              Expense this month
            </Heading>
          </div>
          <div className='content'>No data at this moment.</div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
