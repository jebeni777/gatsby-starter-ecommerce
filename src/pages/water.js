import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const Water = ({location}) => (
  <Layout location={location}>
    <SEO title="Water" />
    <h1>Water Structure/Memory</h1>
    <h3>Structure</h3>
    <p>
      Japanese writer Masaru Emoto (江本 勝, Emoto Masaru, July 22, 1943 –
      October 17, 2014) was a Japanese author and entrepreneur who said that
      human consciousness has an effect on the molecular structure of water.
      Emoto's conjecture evolved over the years, and his early work revolved
      around pseudoscientific hypotheses that water could react to positive
      thoughts and words and that polluted water could be cleaned through prayer
      and positive visualization.
    </p>
    <h3>Memory</h3>
    <p>
      Water memory: Wikipedia states, "Water memory is the purported ability of
      water to retain a memory of substances previously dissolved in it even
      after an arbitrary number of serial dilutions. It has been claimed to be a
      mechanism by which homeopathic remedies work even when they are diluted to
      the point that no molecule of the original substance remains.""
    </p>
    <p>
      Wikipedia goes on to say, "Water memory defies conventional scientific
      understanding of physical chemisty knowledge and is not accepted by the
      scientific community. In 1988, Jacques Benveniste published a study
      supporting a water memory effect amid controversy in <i>Nature</i>,
      accompanied by an editorial by <i>Nature's</i> editor John Maddox urging
      readers to "suspend judgement" until the results can be replicated. In the
      years following publication, multiple supervised experiments were run by
      Benveniste's team, the United Department of Defense,[1] BBC's{' '}
      <i>Horizon</i> programme,[2] and other researchers, but no team has ever
      reproduced Benveniste's results in controlled conditions."
    </p>
  </Layout>
)
export default Water
