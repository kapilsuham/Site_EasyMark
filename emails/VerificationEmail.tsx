import { SITE_NAME } from '@/app/ConfigApp';
import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from '@react-email/components';

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here&apos;s your verification code: {otp}</Preview>
      <Section>
        <Row>
          <Heading as="h2">Hello {username},</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for registering on {SITE_NAME}. Please use the following verification
            code to complete your registration:
          </Text>
        </Row>
        <Row>
          <Text>{otp}</Text>
        </Row>
        <Row>
          <Text>
            Do't forget to follow Me on twitter <a href="/https://x.com/kapil__paliwal?t=0GbROshSxHMoRlUvHqyxgQ&s=08">kapil</a>
          </Text>
        </Row>
        <Row>
          <Button
            href={`${process.env.NEXTAUTH_URL}/verify/${username}`}
            style={{ color: '#FFFFFF', background: '#000000', padding: 10 }}
          >
            Verify here
          </Button>
        </Row>
      </Section>
    </Html>
  );
}