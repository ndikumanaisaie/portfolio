import styled from '@emotion/styled';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #EFFFFA;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  transition: transform 0.2s ease-in-out;
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    width: 100%;
  }

  .portfolio-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 24px;
    align-items: flex-start;
  }  
`;

export default StyledMenu;
