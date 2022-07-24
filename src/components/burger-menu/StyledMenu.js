import styled from '@emotion/styled';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: rgb(27, 37, 54);;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  transition: transform 0.2s ease-in-out;
  z-index: 1;
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    width: 100%;
  }

  .mobile-portfolio-container {
    display: flex;
    flex-direction: column;
    gap: 22px;
    font-size: 26px;
    align-items: flex-start;
    margin-bottom: 32px;
    border-bottom: 1px solid grey;
    padding: 24px;
  }

  .social-icon {
    color: #3d90e3;
    border-radius: 50px;
    padding: 6px;
  }
`;

export default StyledMenu;
