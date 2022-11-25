import { useForm, SubmitHandler } from "react-hook-form";
import { Container, Row, Input, Button, Textarea, Spacer } from '@nextui-org/react';

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
          <Input
            bordered
            labelPlaceholder="Name" 
            initialValue="名前を記入"
            width="100%"
            {...register("name" , { required: true })}
          />
        </Row>
        <Spacer y={2} />
        <Row>
          <Input
            bordered
            labelPlaceholder="Email" 
            initialValue="メールアドレスを記入"
            width="100%"
            {...register("email", { required: true })}
          />
        </Row>
        <Spacer y={2} />
        <Row>
          <Textarea
            bordered
            color="primary"
            labelPlaceholder="Text"
            rows={3}
            initialValue="内容を記入"
            width="100%"
            {...register("text", { required: true })}
          />
        </Row>
        <Spacer y={2} />
        <Row justify="center">
          <Button type="submit">Submit</Button>
        </Row>
      </form>
    </Container>

  )
}