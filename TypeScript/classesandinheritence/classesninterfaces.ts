interface IDeveloper {
  name: string
  position: string
  develop: () => void
}

class Developer implements IDeveloper {
  name: string;
  position: string;

  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
  }

  develop(): void {
    console.log('develop an app');
  }
}