import { hbfm } from '../src/index.js'

test('Processes the markdown within an HTML block if its just a class wrapper', function() {
	const source = '<div>*Bold text*</div>';
	const rendered = hbfm.render(source);
	expect(rendered).toBe('<div> <p><em>Bold text</em></p>\n </div>');
});
