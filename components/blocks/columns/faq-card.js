import { Box } from '@chakra-ui/react'
import { Typo } from '@matthill8286/atomic-ui'
import { MDXRemote } from 'next-mdx-remote'

export default function FAQCard({ content, title }) {
  return (
    <div>
      <Typo as="dt" fontSize="lg" lineHeight="6" weight="medium" color="gray5">
        {title}
      </Typo>
      <Box as="dd" mt={2} className="prose">
        <MDXRemote {...content.mdx} />
      </Box>
    </div>
  )
}
