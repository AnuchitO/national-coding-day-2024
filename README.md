# national-coding-day-2024
 National Coding Day 2024: Workshop Day The Art of Software Testing: Unveiling the Secrets Behind Testing Frameworks

Test Double different types of test doubles, including:
- Dummy objects: objects that are passed around but never actually used.
- Stubs: provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
- Fake objects: objects that have working implementations, but not the same as production one. (InMemoryTestDatabase is a good example of a fake object)
- Spies: are stubs that also record some information based on how they were called.
- Mocks: are pre-programmed with expectations which form a specification of the calls they are expected to receive.

simplification for test doubles what is the similarity and difference between them
| Test Double Type | Purpose                          | Implementation              | Default Behavior | Use Case                                                       |
| ---------------- | -------------------------------- | --------------------------- | ---------------- | -------------------------------------------------------------- |
| Dummy Object     | make the code compile            | empty object                | no-op            | when the code requires an object but doesn't use it            |
| Fake             | provide a working implementation | simplified implementation   | return values    | when the code requires an object with a working implementation |
| Stub             | provide canned answers           | hard-coded answers          | canned answers   | when the code requires a specific response                     |
| Spy              | record information               | record calls                | record calls     | when the code requires tracking of calls                       |
| Mock             | pre-programmed with expectations | pre-programmed expectations | fail test        | when the code requires a specific sequence of calls            |

- Dummy is a no-op, while Spy records calls.
- Fake is a simplified implementation, while Stub provides canned answers.
- Spy is hand-crafted, while Mock is pre-programmed with expectations.


how to run:
```bash
 npm run ts app/cart.test.ts
```

```bash
bun test --test-name-pattern=product --watch
```

