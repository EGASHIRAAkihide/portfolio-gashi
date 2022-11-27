import { useTheme } from '@nextui-org/react';

type Props = {
  status: 'success' | 'error' | string,
  text: string,
}

export const Alert = ({
  status,
  text,
}: Props) => {
  const { theme } = useTheme();

  let backgroundColor;

  switch (status) {
    case ("success"):
      backgroundColor = theme?.colors.success.value
      break
    case ("error"):
      backgroundColor = theme?.colors.error.value
      break
    default:
      backgroundColor = theme?.colors.primary.value
      break
  }

  return (
    <div style={{
      backgroundColor: `${backgroundColor}`,
      borderRadius: '6px',
      color: theme?.colors.white.value,
      fontWeight: 'bold',
      padding: '16px',
    }}>
      {text}
    </div>
  )
}