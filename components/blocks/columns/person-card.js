import Image from 'next/image'
import { Box, HStack } from '@chakra-ui/react'
import { Typo, Heading } from '@matthill8286/atomic-ui'
import { AvatarIcon } from '@/components/icons'

export default function PersonCard({ name, photo, role }) {
  return (
    <div>
      <HStack display="flex" alignItems="center" spacing={{ base: 4, lg: 6 }}>
        <Box
          bg="gray.100"
          w={{ base: 16, lg: 20 }}
          h={{ base: 16, lg: 20 }}
          overflow="hidden"
          position="relative"
          borderRadius="full"
        >
          {photo ? (
            <Image
              className="avatar"
              src={photo.url}
              alt={name}
              title={name}
              layout="fill"
            />
          ) : (
            <Box as={AvatarIcon} h="full" w="full" color="gray.300" />
          )}
        </Box>
        <Box fontWeight="medium" fontSize="lg" lineHeight="6">
          <Heading color="success" scale="level-3" bold>
            {name}
          </Heading>

          {role && (
            <Typo margin="xxs 0 0" color={'grey4'}>
              {role}
            </Typo>
          )}
        </Box>
      </HStack>
    </div>
  )
}
