import { Box, Stack } from '@chakra-ui/react'

import { CheckIcon } from '@/icons'
import { Heading, Link, Typo } from '@matthill8286/atomic-ui'

export default function PricingPlanCard({
  annualPrice,
  billingPeriod,
  description,
  included,
  monthlyPrice,
  name
}) {
  return (
    <Box
      border="1px solid"
      borderColor="grey2"
      borderRadius="lg"
      boxShadow="sm"
    >
      <Box p={6} borderBottom="1px solid" borderColor="grey2">
        <Heading
          as="h2"
          scale="level-2"
          bold
          lineHeight="6"
          fontWeight="medium"
          color="grey5"
          margin="sm 0"
        >
          {name}
        </Heading>
        <Typo fontSize="sm" lineHeight="5" color="gray3">
          {description}
        </Typo>
        <Box mt={8}>
          <Typo
            as="span"
            weight="bold"
            fontSize="xxl"
            lineHeight="shorter"
            color="grey5"
          >
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0
            }).format(billingPeriod === 'monthly' ? monthlyPrice : annualPrice)}
          </Typo>
          <Typo as="span" fontSize="md" fontWeight="medium" color="grey3">
            {billingPeriod === 'monthly' ? '/mo' : '/yr'}
          </Typo>
        </Box>
        <Link
          href="#"
          mt={8}
          display="block"
          type="button"
          fontWeight="semibold"
          textAlign="center"
          _hover={{
            bg: 'indigo.700'
          }}
        >
          Buy {name}
        </Link>
      </Box>
      <Box pt={6} pb={8} px={6}>
        <Heading
          as="h3"
          scale="level-4"
          fontWeight="medium"
          color="grey5"
          letterSpacing="wide"
          textTransform="uppercase"
        >
          What&apos;s included
        </Heading>
        <Stack as="ul" mt={6} spacing={4}>
          {included.map((feature, index) => (
            <Stack
              as="li"
              key={index}
              display="flex"
              spacing={3}
              direction="row"
            >
              <Box
                as={CheckIcon}
                flexShrink="0"
                w={5}
                h={5}
                color="green.500"
                aria-hidden="true"
              />
              <Typo as="span" fontSize="sm" color="grey3">
                {feature}
              </Typo>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
