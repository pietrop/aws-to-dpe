const amazonTodayInFocusTranscript = require('./sample/todayinfocus.sample.json');
const wordsWithSpeakers = require('./sample/todayinfocuswords.sample.json');
const { groupWordsBySpeakerLabel, findSpeakerForWord, groupWordsBySpeaker } = require('./group-words-by-speakers');

const words = amazonTodayInFocusTranscript.results.items;
const speakerLabels = amazonTodayInFocusTranscript.results.speaker_labels;

describe('groupWordsBySpeakerLabel', () => {

  it('Should group speakers correctly', ( ) => {

    const groups = groupWordsBySpeakerLabel(wordsWithSpeakers);
    expect(groups[0].speaker).toBe('spk_0');
    expect(groups[0].words.length).toBe(1);
    expect(groups[1].speaker).toBe('spk_1');
    expect(groups[1].words.length).toBe(2);
  });
});

describe('findSpeakerForWord', () => {

  it('Should find correct speaker', ( ) => {

    const speaker = findSpeakerForWord({
      'start_time': '8.65',
      'end_time': '8.98',
      'alternatives': [
        {
          'confidence': '0.9999',
          'content': 'one'
        }
      ],
      'type': 'pronunciation'
    }, speakerLabels.segments);

    expect(speaker).toBe('0');
  });
});

describe('groupWordsBySpeaker', () => {
  /** Hopefully the other unit tests suffice.
    * this is a rather lazy one to check the full results
    */
  it('Should return expected number of groups', ( ) => {

    const groups = groupWordsBySpeaker(words, speakerLabels);
    expect(groups.length).toBe(173);
  });
});