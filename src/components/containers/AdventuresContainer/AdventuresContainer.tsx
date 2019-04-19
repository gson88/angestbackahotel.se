import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IAppState } from '~/reducers/app-reducer';
import IntlMessage from '~/components/views/IntlMessage/IntlMessage';
import StaticBackground from '~/components/views/StaticBackground/StaticBackground';
import SectionContainer from '~/components/views/SectionContainer/SectionContainer';
import { getAdventures } from './actions';
import style from './AdventuresContainer.module.scss';

interface IAdventuresContainer {
  getAdventures: typeof getAdventures
}

const AdventuresContainer: React.FC<IAdventuresContainer> = props => {
  useEffect(() => {
    props.getAdventures();
  }, []);

  return (
    <section className={style.AdventuresContainer}>
      <StaticBackground src="/images/adventures/adventure1.jpg" height="400px">
        <h1>
          <IntlMessage message="adventures.adventures.header" />
        </h1>
      </StaticBackground>

      <SectionContainer>
        Yo yo yo
        <div style={{ height: '3000px' }} />
      </SectionContainer>
    </section>
  );
};

const mapStateToProps = (state: IAppState) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getAdventures
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AdventuresContainer);
