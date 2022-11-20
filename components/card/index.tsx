import {
  Card as NextUiCard,
  Col,
  Link,
  Text,
} from "@nextui-org/react"

type Props = {
  date: string;
  href: string;
  src: string;
  title: string;
  text: string;
}

export const Card = ({
  date,
  href,
  src,
  title,
  text,
}: Props) => (
  <NextUiCard>
    <Link href={href} css={{height: '300px', maxWidth: '100%'}}>
      <NextUiCard.Header
        css={{ position: "absolute", zIndex: 100, top: 10, left: 10 }}
      >
        <Col css={{width: "80%"}}>
          <Text size="$sm" weight="bold" transform="uppercase" color="#ffffffAA">
            {text}
          </Text>
          <Text h4 color="white" size="$lg">
            {title}
          </Text>
          <Text h4 color="white" size="$xs">
            {date}
          </Text>
        </Col>
      </NextUiCard.Header>
      <NextUiCard.Body css={{height: '100%', padding: 0}}>
        <NextUiCard.Image
          alt={title}
          css={{filter: "brightness(0.4)"}}
          height="100%"
          objectFit="cover"
          showSkeleton
          src={src}
          width="100%"
        />
      </NextUiCard.Body>
    </Link>
  </NextUiCard>
)

export default Card