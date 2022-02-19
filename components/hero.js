import { Box, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'

import Button from '@/components/button'
import Navigation from '@/components/navigation'
import { Heading } from '@matthill8286/atomic-ui'

export default function Hero({ buttons, image, navigation, page }) {
  return (
    <Box position="relative" bg="gray.50">
      <Navigation {...navigation} />
      <Box as="main" position={{ lg: 'relative' }}>
        <Box
          mx="auto"
          maxW="7xl"
          w="full"
          py={{ lg: 48 }}
          pt={16}
          pb={20}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Box px={[4, 8]} pr={{ xl: 16 }} width={{ lg: '50%' }}>
            <Heading
              as="h1"
              scale="level-1"
              weight="bold"
              spacing="tight"
              lineHeight="1"
              color="gray5"
            >
              {page.title}
            </Heading>
            {page.subtitle && (
              <Box
                className="prose prose-lg sm:prose-xl"
                mt={[3, null, 5]}
                w="full"
                maxW={['md', null, '3xl']}
                mx="auto"
              >
                <MDXRemote {...page.subtitle.mdx} />
              </Box>
            )}
            {buttons && (
              <Stack
                mt={10}
                direction={['column', 'row']}
                display={{ sm: 'flex' }}
                justifyContent={{ sm: 'center', lg: 'flex-start' }}
                spacing={[3, 0]}
              >
                {buttons.map((button) => (
                  <Box
                    key={button.id}
                    sx={{
                      ':nth-of-type(even)': {
                        mx: [0, 3]
                      }
                    }}
                  >
                    <Button {...button} />
                  </Box>
                ))}
              </Stack>
            )}
          </Box>
        </Box>
        <Box
          pos={{ base: 'relative', lg: 'absolute' }}
          w={{ base: 'full', lg: '50%' }}
          h={[64, 72, 96, 'full']}
          top={{ lg: 0 }}
          bottom={{ lg: 0 }}
          right={{ lg: 0 }}
        >
          <Image
            className="hero-image"
            src={image.url}
            alt={image.title}
            title={image.title}
            layout="fill"
            priority={true}
            objectFit="cover"
          />
        </Box>
      </Box>
    </Box>
  )
}
