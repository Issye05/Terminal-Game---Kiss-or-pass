import promptSync from 'prompt-sync';
const prompt = promptSync();

const namn: string[] = ['Eliah Bror Bäckström Dimmed', 'Tomtemor', 'Erik Lööf'];
const puss: string[] = [];

function fragaNamn(): void {
  for (let i = 0; i < namn.length; i++) {
    const b: string = namn[i];
    const svar: string = prompt('puss eller pass för ' + b + '?').toLowerCase().trim();

    if (svar === 'puss') {
      puss.push(b);
    }
  }

  console.log('Du vill pussa ', puss.join(', '), '<3');
}

fragaNamn();
