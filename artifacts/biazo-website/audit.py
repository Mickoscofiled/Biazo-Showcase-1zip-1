import urllib.request
import json

try:
    url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://biazointernational.com/&strategy=mobile'
    response = urllib.request.urlopen(url)
    data = json.loads(response.read())

    score = data['lighthouseResult']['categories']['performance']['score'] * 100
    print(f'Score: {score}')
    print('\nTop Issues:')

    audits = []
    for k, v in data['lighthouseResult']['audits'].items():
        if v.get('score') is not None and v.get('score') < 0.9 and v.get('weight', 0) > 0:
            audits.append(v)

    audits.sort(key=lambda x: x.get('score', 1))

    for a in audits[:5]:
        title = a.get('title')
        val = a.get('displayValue', '')
        print(f'- {title}: {val}')
except Exception as e:
    print(f'Error: {e}')
