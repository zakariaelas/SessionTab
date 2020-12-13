import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { AccordionButton } from '@reach/accordion';
import { CustomCheckboxContainer } from '@reach/checkbox';
import { Dialog as ReachDialog } from '@reach/dialog';
import { MenuButton, MenuItem, MenuList } from '@reach/menu-button';

export const AppContainer = styled.div({
  width: '480px',
  margin: '0 auto',
  height: '1000px',
  padding: '32px 20px',
});

export const GroupItemButton = styled(AccordionButton)({
  padding: '16px 8px',
  display: 'flex',
  alignItems: 'center',
  '&:hover svg': {
    display: 'inline-block',
  },
  border: 'none',
  background: 'none',
  width: '100%',
  borderBottom: '2px solid #f0f4f8',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in',
  '&:hover': {
    background: '#f0f4f8',
  },
  fontFamily: `'Jost', sans-serif`,
  fontSize: '14px',
});

export const CustomMenuButton = styled(MenuButton)({
  padding: '8px',
  borderRadius: '50%',
  transition: 'background .3s ease-in-out',
  // transition: 'transform .2s ease-out',
  border: 'none',
  background: 'none',
  display: 'flex',
  '&:hover': {
    background: '#E0E8F9',
  },
  cursor: 'pointer',
});

export const CustomMenuItem = styled(MenuItem)({
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #e0e8f9',
  background: 'white',
  transition: 'background 0.3s ease-in-out',
  '&:hover': {
    background: '#f0f4f8',
  },
  cursor: 'pointer',
});

export const CustomMenuList = styled(MenuList)({
  padding: '4px 4px 0 4px',
  boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
  background: 'white',
});

export const Dialog = styled(ReachDialog)({
  minWidth: '340px',
  borderRadius: '8px',
  boxShadow: '0px 15px 30px rgba(0,0,0,0.2)',
  padding: '16px',
  margin: '10vh auto',
});

export const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '30px',
  height: '30px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f0f4f8',
  border: `1px solid #f0f4f8`,
  cursor: 'pointer',
});

export const InputLabel = styled.label({
  fontSize: '14px',
  color: '#486581',
});

export const Input = styled.input({
  padding: '6px 8px',
  display: 'flex',
  width: '100%',
  margin: '4px 0',
  border: '2px solid #19216C',
  borderRadius: '4px',
  '&:focus': {
    border: '3px solid #19216C',
    borderRadius: '4px',
  },
});

export const CheckboxContainer = styled(CustomCheckboxContainer)({
  border: '2px solid #000',
  borderRadius: '4px',
  height: 16,
  flex: '0 0 16px',
});

export const CheckStyle = styled.span((props) => ({
  display: 'block',
  position: 'absolute',
  width: '80%',
  height: '80%',
  top: '50%',
  left: '50%',
  transform: `translate(-50%, -50%) scale(${
    !!props.checked ? 1 : 0
  })`,
  transition: 'transform 200ms ease-out, background 200ms ease-out',
  zIndex: 1,
  background: !!props.checked ? '#19216C' : 'transparent',
}));

const buttonVariants = {
  text: {
    '&:hover': {
      background: 'rgba(131,143,253,0.2)',
    },
  },
  outlined: {
    border: '2px solid #19216C',
    color: '#19216C',
    '&:hover': {
      background: '#19216C',
      color: 'white',
      transform: 'scale(1.05)',
    },
  },
};

export const IconButton = styled.button({
  borderRadius: '50%',
  padding: '8px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f0f4f8',
  border: `1px solid #f0f4f8`,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  '&:after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    backgroundImage:
      'radial-gradient(circle, #000 10%, transparent 10.01%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    transform: 'scale(10,10)',
    opacity: 0,
    transition: 'transform .5s opacity 1s',
  },
  '&:active:after': {
    transform: 'scale(0,0)',
    opacity: '.2',
    transition: '0s',
  },
});

// const RippleEffect = keyframes`
//   from {
//     transform: scale(0);
//     opacity: 1
//   }
//   to{
//     transform: scale(4);
//     opacity: 0;
//   }
// `;

// const SpanRipple = styled.span({
//   position: 'absolute',
//   borderRadius: '50%',
//   animation: `${RippleEffect} 600ms linear`,
//   backgroundColor: 'rgba(255, 255, 255, 0.7)',
// });

// export const IconButton = ({ children, ...props }) => {
//   return (
//     <IconButtonCSS {...props}>
//       {children}
//       <SpanRipple />
//     </IconButtonCSS>
//   );
// };

export const Button = styled.button(
  {
    padding: '6px 8px',
    background: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all .2s ease-in',
    fontFamily: `'Jost', sans-serif`,
    fontWeight: 500,
  },
  ({ variant = 'text' }) => buttonVariants[variant],
);

export const ErrorMessage = styled.span({
  marginTop: '2px',
  color: 'red',
  fontWeight: 500,
  fontSize: '12px',
});

export const SlideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FadeIn = keyframes`
  0%{
    opacity: 0.2;
  }
  100%{
    opacity: 1;
  }
`;

export const ActiveTabs = styled.div`
  margin-top: 12px;
  overflow-y: auto;
  max-height: 160px;
  &::webkit-scrollbar {
    width: 5px;
  }
  &::webkit-scrollbar {
    background: #eee;
  }
  &::webkit-scrollbar-thumb {
    background: #000;
  }
`;

export const Tabs = styled.ul`
  padding-left: 32px;
  padding-right: 4px;
  list-style: none;
`;
