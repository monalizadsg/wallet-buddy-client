import { Flex, Heading, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { TbWallet } from "react-icons/tb";
import { MdOutlineFoodBank } from "react-icons/md";
import Header from "../components/Header";
import SavingList from "../savingPlan/SavingList";
import { savingsData, expenseData } from "../commons/data";

const transactionData = [
  {
    id: 1,
    name: "N's salary",
    category: "Salary",
    amount: 2000,
    date: "March 25, 2023",
    type: "income",
  },
  {
    id: 2,
    name: "Hydro (May 2023)",
    category: "Hydro",
    amount: 50,
    date: "March 25, 2023",
    type: "expense",
  },
  {
    id: 3,
    name: "ProtonVPN",
    category: "Subscription",
    amount: 13,
    date: "March 26, 2023",
    type: "expense",
  },
  {
    id: 4,
    name: "Rental Fee (May)",
    category: "Rent",
    amount: 1750,
    date: "March 26, 2023",
    type: "expense",
  },
  {
    id: 4,
    name: "Parking Rental Fee (May)",
    category: "Rent",
    amount: 70,
    date: "March 26, 2023",
    type: "income",
  },
];

const newSavingsData = savingsData.slice(0, 2);

function Dashboard() {
  return (
    <Flex flex='80%' flexDir='column'>
      <Header />
      <Flex flex='1'>
        <Flex
          flex='55%'
          p={6}
          borderRight='2px solid rgb(226, 226, 226)'
          className='left-col'
        >
          <Flex flex={1} flexDir='column' gap={5} >
            <Grid
              templateColumns='repeat(3, 1fr)'
              gap={6}
              w='100%'
              // border='1px solid red'
            >
              <GridItem w='100%' h='auto' bg='#CDF2E0' borderRadius={16}>
                <Flex
                  h='100%'
                  // border='1px solid orange'
                  padding={6}
                  gap={3}
                  alignItems='center'
                >
                  <Icon as={TbWallet} fontSize='2em' color='#6CCB9D' />
                  <Flex flexDir='column'>
                    <Text fontSize='md' textTransform='uppercase'>
                      Income
                    </Text>
                    <Text as='b'>$2000.00</Text>
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem w='100%' h='auto' bg='#F2DAE5' borderRadius={16}>
                <Flex
                  h='100%'
                  // border='1px solid orange'
                  padding={6}
                  gap={3}
                  alignItems='center'
                >
                  <Icon as={TbWallet} fontSize='2em' color='#F896C3' />
                  <Flex flexDir='column'>
                    <Text fontSize='md' textTransform='uppercase'>
                      Expense
                    </Text>
                    <Text as='b'>$1500.00</Text>
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem w='100%' h='auto' bg='#CDF1F2' borderRadius={16}>
                <Flex
                  h='100%'
                  // border='1px solid orange'
                  padding={6}
                  gap={3}
                  alignItems='center'
                >
                  <Icon as={TbWallet} fontSize='2em' color='#61BDBF' />
                  <Flex flexDir='column'>
                    <Text fontSize='md' textTransform='uppercase'>
                      Savings
                    </Text>
                    <Text as='b'>$1000.00</Text>
                  </Flex>
                </Flex>
              </GridItem>
            </Grid>
            <Flex flexDir='column' gap={3}>
              <Flex alignItems='center' justifyContent='space-between'>
                <Heading as='h5' size='sm'>
                  Recent Transactions
                </Heading>
                <Text
                  fontSize='xs'
                  _hover={{ color: "teal.500", cursor: "pointer" }}
                >
                  See all
                </Text>
              </Flex>
              <Flex flexDir='column'>
                {transactionData.map((item, index) => (
                  <Flex
                    className='item'
                    justifyContent='space-between'
                    key={index}
                    style={{
                      // backgroundColor: "#EEEFEA",
                      // border: "1px solid red",
                      borderRadius: 10,
                      marginBottom: 12,
                      // padding: "8px",
                    }}
                  >
                    <Flex className='item-details' alignItems='center' gap={3}>
                      <Icon
                        as={MdOutlineFoodBank}
                        fontSize='2em'
                        color='#61BDBF'
                      />
                      <div>
                        <Text fontSize='sm' as='b'>
                          {item.name}
                        </Text>
                        <Text fontSize='xs'>{item.category}</Text>
                      </div>
                    </Flex>
                    <Flex className='item-amount' alignItems='center' gap={6}>
                      <Text
                        fontSize='sm'
                        as='b'
                        style={{
                          color: item.type === "income" ? "#6CCB9D" : "#F896C3",
                          // border: "1px solid red",
                        }}
                        alignItems='center'
                      >
                        {`${
                          item.type === "income" ? "+" : "-"
                        } $${item.amount.toFixed(2)}`}
                      </Text>
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            </Flex>
            <Flex
            // border='1px solid green'
            >
              Upcoming payments here
            </Flex>
          </Flex>
        </Flex>
        <Flex flex='35%' flexDir='column' p={6} gap={5} className='right-col'>
          {/* <Flex alignItems='center' justifyContent='space-between'>
            <Heading as='h5' size='sm'>
              Saving Goals
            </Heading>
            <Text
              fontSize='xs'
              _hover={{ color: "teal.500", cursor: "pointer" }}
            >
              See all
            </Text>
          </Flex> */}
          {/* <Grid
            templateColumns='repeat(3, 1fr)'
            gap={6}
            w='100%'
            // border='1px solid red'
          >
            <GridItem w='100%' h='auto' bg='#CDF2E0' borderRadius={16}>
              <Flex
                h='100%'
                // border='1px solid orange'
                padding={6}
                gap={3}
                alignItems='center'
              >
                Goal 1
              </Flex>
            </GridItem>
            <GridItem w='100%' h='auto' bg='#F2DAE5' borderRadius={16}>
              <Flex
                h='100%'
                // border='1px solid orange'
                padding={6}
                gap={3}
                alignItems='center'
              >
                Goal 2
              </Flex>
            </GridItem>
            <GridItem w='100%' h='auto' bg='#CDF1F2' borderRadius={16}>
              <Flex
                h='100%'
                // border='1px solid orange'
                padding={6}
                gap={3}
                alignItems='center'
              >
                Goal 3
              </Flex>
            </GridItem>
          </Grid> */}
          <Flex flexDir='column' gap={3}>
            <Flex alignItems='center' justifyContent='space-between'>
              <Heading as='h5' size='sm'>
                My Savings
              </Heading>
              <Text
                fontSize='xs'
                _hover={{ color: "teal.500", cursor: "pointer" }}
              >
                See all
              </Text>
            </Flex>
            <SavingList data={newSavingsData} readOnly />
          </Flex>
          <Flex flexDir='column' gap={3}>
            <Flex alignItems='center' justifyContent='space-between'>
              <Heading as='h5' size='sm'>
                Total Spend
              </Heading>
              <Text
                fontSize='xs'
                _hover={{ color: "teal.500", cursor: "pointer" }}
              >
                See all
              </Text>
            </Flex>
            <Flex flexDir='column' gap={5}>
              {expenseData.map((item, index) => (
                <Flex
                  className='item'
                  justifyContent='space-between'
                  key={index}
                >
                  <Flex className='item-details' alignItems='center' gap={3}>
                    <Icon
                      as={MdOutlineFoodBank}
                      fontSize='2em'
                      color='#61BDBF'
                    />
                    <Text fontSize='sm' as='b'>
                      {item.category}
                    </Text>
                  </Flex>
                  <Flex className='item-amount' alignItems='center' gap={6}>
                    <Text fontSize='sm' as='b'>
                      {`$${item.total.toFixed(2)}`}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
