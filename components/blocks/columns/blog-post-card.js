import { Box, Flex, Link, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { Typo } from '@matthill8286/atomic-ui'
import startCase from 'lodash.startcase'

export default function BlogPostCard({
  authors,
  category,
  coverImage,
  excerpt,
  formattedPublished,
  published,
  slug,
  title
}) {
  const [primaryAuthor, ...secondaryAuthors] = authors

  return (
    <Flex flexDir="column" borderRadius="lg" boxShadow="lg" overflow="hidden">
      <Box flexShrink="0">
        {coverImage && (
          <Image
            className="blog-post-card-image"
            src={coverImage.url}
            alt={coverImage.title}
            title={coverImage.title}
            width={coverImage.width}
            height={coverImage.height}
            objectFit="cover"
          />
        )}
      </Box>
      <Flex
        display="flex"
        flex="1 1 0"
        bg="white"
        p={6}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box flex="1 1 0">
          <Typo fontSize="sm" fontWeight="medium" color="indigo.600">
            {startCase(category.toLowerCase())}
          </Typo>
          <NextLink href={`/blog/${slug}`}>
            <Link
              display="block"
              mt={2}
              _hover={{
                textDecor: 'none'
              }}
            >
              <Typo
                tag="div"
                fontSize="xl"
                fontWeight="semibold"
                color="gray.900"
              >
                {title}
              </Typo>
              <Typo fontSize="sm" color="grey4">
                {excerpt}
              </Typo>
            </Link>
          </NextLink>
        </Box>
        <Flex alignItems="center" mt={6}>
          <Stack
            direction="row"
            display="flex"
            spacing={-2}
            pos="relative"
            zIndex="0"
            overflow="hidden"
          >
            {authors.map((author) => {
              return (
                <Box
                  key={author.id}
                  display="inline-block"
                  w={9}
                  h={9}
                  pos="relative"
                  borderRadius="full"
                  border="2px solid white"
                >
                  <Image
                    className="avatar"
                    src={author.photo.url}
                    alt={author.name}
                    title={author.name}
                    layout="fill"
                  />
                </Box>
              )
            })}
          </Stack>
          <Box ml={3}>
            <Typo fontSize="sm" fontWeight="medium" color="gray.900">
              {primaryAuthor?.name ?? 'No author'}

              {secondaryAuthors && secondaryAuthors.length > 0 && (
                <Typo as="span" ml={1}>
                  + {Number(secondaryAuthors.length)} other
                </Typo>
              )}
            </Typo>
            <Stack
              display="flex"
              direction="row"
              spacing={1}
              fontSize="sm"
              color="gray.500"
            >
              <time dateTime={published}>{formattedPublished}</time>
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
