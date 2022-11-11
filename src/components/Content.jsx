import styled from 'styled-components';

const StyledContentSection = styled.section`
  position: relative;
  padding: 30vh 5vw 10vh;
  background-color: #e1dfdd;
  z-index: -1;

  .content__wrapper {
    width: 100%;
    max-width: 1217px;
    margin: 0 auto;

    .content__text--heading {
      font-family: 'Italiana', serif;
      font-size: clamp(1rem, 5.25vw, 10rem);
      line-height: 1;
      font-weight: 300;
    }

    .content__text--copy {
      font-family: 'Italiana', serif;
      font-size: clamp(1rem, 25vw, 1.25rem);
      line-height: 1.3;
      font-weight: 300;
      width: 50%;
      margin-bottom: 10vh;
      margin-top: 10vh;
    }
  }
`;

export default function Content() {
  return (
    <StyledContentSection>
      <div className='content__wrapper'>
        <p className='content__text--heading'>
          Creates meaningful web experiences with a focus on motion integration.
          Exploring Rotated 3D Letters Animation for a Menu Hover Effect.
        </p>
        <p className='content__text--copy'>
          Leggings iPhone austin, pok pok fixie godard beard. Chartreuse DIY
          hashtag edison bulb. Swag gluten-free butcher kickstarter yuccie
          williamsburg, locavore helvetica health goth. Selvage farm-to-table
          four loko la croix distillery fingerstache ennui hashtag poutine
          everyday carry shabby chic +1 church-key godard sustainable.
        </p>
      </div>
    </StyledContentSection>
  );
}
