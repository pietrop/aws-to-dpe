const draftToDigitalPaperEdit = require('./index.js');
const digitalPaperEditTranscript = require('./sample/digitalPaperEdit.sample.json');
const draftTranscriptExample = require('./sample/draftjs.sample.json');

describe('Draft Js to Digital Paper Edit', () => {
  const result = draftToDigitalPaperEdit(draftTranscriptExample);
  it('Should be defined', ( ) => {
    expect(result).toBeDefined();
  });

  it('Should be equal to expected value', ( ) => {
    expect(result).toEqual(digitalPaperEditTranscript);
  });
});