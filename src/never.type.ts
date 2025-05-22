type Field = 'email' | 'username';

function handle(field: Field) {
  switch (field) {
    case 'email':
      return 'do email';
    case 'username':
      return 'do username';
    default:
      const _exhaustive: never = field;
      return _exhaustive;
  }
}
