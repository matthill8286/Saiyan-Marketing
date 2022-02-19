import { Flex, Box } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

import { CheckIcon } from '@/icons'
import { Typo } from '@matthill8286/atomic-ui'

export default function FeatureCheck({ content, title }) {
  return (
    <Flex>
      <Box
        as={CheckIcon}
        flexShrink="0"
        w={6}
        h={6}
        color="green.500"
        aria-hidden="true"
      />
      <Box ml={3}>
        <Typo as="dt" fontSize="lg" lineHeight={6} weight="500" color="grey5">
          {title}
        </Typo>
        <Box as="dd" mt={2} className="prose">
          <MDXRemote {...content.mdx} />
        </Box>
      </Box>
    </Flex>
  )
}
