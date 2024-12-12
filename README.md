# Public API Consumer

It's time for our first proper project, where we over the next two weeks will build a small website with a number of features. You'll present your projects on December 13th, 9:00 - 12:00.

## Recommendations

Keep things simple, and focus on the big features before diving in to too much detail. For example, try to set up your data fetching properly before spending too much time thinking about how the data should be presented. As the deadline approaches, it's better to have a basic setup of all features and deal with details and improvements, rather than missing some features all together.

Although it's an individual project, feel free to collaborate and talk solutions with your classmates.

You have tons of [public API's](https://github.com/public-apis/public-apis) to choose from out there. You can pick any open API you want, even if it's not on the provided list of public API's.

**OBS!** Some public API's does not have generous [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) settings. When you find an API you want to use, try to call it using `fetch` in a local JavaScript file and make sure it works before continuing.

## Requirements

### Must

- Your project must `fetch` external data from a [public API](https://github.com/public-apis/public-apis).
- Your project must use an [Event](../04%20-%20Event%20Listeners/README.md), for example a button click, to trigger some data fetching.
- Your project must have a nice user interface with consistent margins and paddings.
- Your project must make use of [CSS variables](../../HTML%20&%20CSS/02%20-%20Cascading%20Style%20Sheets/solutions/assets/style.css) for at least colors.
- Your project must be [responsive](../../HTML%20&%20CSS/06%20-%20Media%20Queries/README.md) and look good on all viewports.
- Your project must be versioned with git, in a repository on Github.
- Your project must be deployed to the web using Github Pages.

### Could

- Your project could have the possibility to dynamically change the API endpoint (API url) through some form element, like a [text input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), [dropdown](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) or [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).
- Your project could fetch and display large amounts of data, dealing with both objects and arrays.
- Your project could use multiple APIs.
- Your project could make use of [CSS animations](../../HTML%20&%20CSS/08%20-%20Transitions%20&%20Animations/README.md) to spice up the website.

## Grading

For G:

- Complete all of the features mentioned under **must** above.

For VG:

- Everything required for G.
- Complete **at least** the first bullet point mentioned under **could** above.
- Have a clear and organized structure for all of your code.
