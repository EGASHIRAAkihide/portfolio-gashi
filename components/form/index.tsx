import { useForm, SubmitHandler } from "react-hook-form";
import { Container, Row, Input, Button, Textarea, Spacer, Text, Col } from '@nextui-org/react';

type InputProps = {
  name: string;
  email: string;
  title?: string;
  text: string;
}

export const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<InputProps>();
  return (
    <Container css={{maxWidth: "400px"}}>
      <form>
        <Spacer y={2} />
        <Row>
          <Col>
            <Input
              bordered
              labelPlaceholder="Name" 
              width="100%"
              status={errors.name ? 'error' : 'primary'}
              {...register("name" , { required: true })}
            />
            {!errors.name && (
            <Text color="error" size="$sm" css={{margin: "$4 0 0 $2"}}>
              Name is required
            </Text>
            )}
          </Col>
        </Row>
        <Spacer y={2} />
        <Row>
          <Col>
          <Input
            bordered
            labelPlaceholder="Email" 
            width="100%"
            status={errors.email ? 'error' : 'primary'}
            {...register("email", { required: true })}
          />
          {!errors.email && (
          <Text color="error" size="$sm" css={{margin: "$4 0 0 $2"}}>
            Email is required
          </Text>
          )}
          </Col>
        </Row>
        <Spacer y={2} />
        <Row>
          <Col>
            <Textarea
              bordered
              color="primary"
              labelPlaceholder="Text"
              rows={3}
              width="100%"
              status={errors.text ? 'error' : 'primary'}
              {...register("text", { required: true })}
            />
            {!errors.text && (
            <Text color="error" size="$sm" css={{margin: "$4 0 0 $2"}}>
              Text is required
            </Text>
            )}
          </Col>
        </Row>
        <Spacer y={2} />
        <Row justify="center">
          <Button type="submit">Submit</Button>
        </Row>
      </form>
    </Container>

  )
}