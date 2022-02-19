import { Box, Stack } from '@chakra-ui/react'

import Button from '@/components/button'
import { CopyText, HeadingFeatured } from '@matthill8286/atomic-ui'

export default function Breakpoint({ buttons, subtitle, title }) {
  if (!(buttons || buttons.length)) return null

  return (
    <Box bg="white">
      <Box maxW="7xl" mx="auto" py={[12, null, 16, 20]} px={[4, 6, null, 8]}>
        <HeadingFeatured display="flex" color="grey5">
          {title}
        </HeadingFeatured>
        <CopyText as="span" display="block" color="grey4" fontSize="md">
          {subtitle}
        </CopyText>
        <Stack display="flex" direction="row" mt={8} spacing={3}>
          {buttons.map((button) => (
            <Box
              key={button.id}
              display="inline-flex"
              borderRadius="md"
              boxShadow="md"
            >
              <Button {...button} />
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
