/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
import { Heading, VStack, Image, Text }  from "@chakra-ui/react";


    const CoinsCard = ({id, name, img, Symbol, price, currencySymbol="₹"}) => (
      <Link to={`/coin/${id}`}>
        <VStack
          w={"52"}
          shadow={"lg"}
          p={"8"}
          borderRadius={"lg"}
          transition={"all 0.3s"}
          m={"4"}
          css={{
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Image
            src={img}
            w={"10"}
            h={"10"}
            objectFit={"contain"}
            alt={"Exchange"}
          />
          <Heading size={"md"} noOfLines={1}>
            {Symbol}
          </Heading>
    
          <Text noOfLines={1}>{name}</Text>
          <Text noOfLines={1}>{price? `${currencySymbol}${price}`: "NA"}</Text>
        </VStack>
      </Link>
    );

export default CoinsCard
