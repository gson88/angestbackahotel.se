import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IntlMessage from '~/components/views/IntlMessage/IntlMessage';
import StaticBackground from '~/components/views/StaticBackground/StaticBackground';
import SectionContainer from '~/components/views/SectionContainer/SectionContainer';
import { IAppState } from '~/reducers/app-reducer';
import style from './AdventuresContainer.module.scss';

const AdventuresContainer: React.FC = () => {
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

  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AdventuresContainer);
