//check that specified mastodon instance is actually a mastodon instance
module.exports = (Franz) => {
	class Mastodon extends Franz {
		validateServer(URL) {
			const api = `${URL}/api/v1/instance/`;
			return new Promise((resolve, reject) => {
					$.get(api, (resp) => {
					if (typeof(resp) === 'object' && 'uri' in resp) {
				resolve();
			} else {
				reject();
			}
		}).fail(reject);
		});
		}
	}

	return Mastodon;
};
