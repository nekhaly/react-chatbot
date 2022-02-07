import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";

export const MessageBubble = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));