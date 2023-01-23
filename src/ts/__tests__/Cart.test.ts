import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});


test('should add Movie to cart', () => {
  const cart = new Cart();
  const movie = new Movie(567, 'The Avengers', 2500, 2012, 'USA', 'Avengers Assemble!', 'Fantasy, Action', '137 minites');
  cart.add(movie);
  expect(cart.items.length).toBe(1);
});

test('should return totalCost', () => {
  const cart = new Cart();
  const musicAlbum1 = new MusicAlbum(11, 'name', 'author', 1200);
  const musicAlbum2 = new MusicAlbum(14, 'name', 'author', 1500);
  const musicAlbum3 = new MusicAlbum(22, 'name', 'author', 7000);
  cart.add(musicAlbum1);
  cart.add(musicAlbum2);
  cart.add(musicAlbum3);
  expect(cart.totalCost()).toBe(9700);
});

test('should return totalCost with discount', () => {
  const cart = new Cart();
  const musicAlbum1 = new MusicAlbum(11, 'name', 'author', 1000);
  const musicAlbum2 = new MusicAlbum(14, 'name', 'author', 2000);
  const musicAlbum3 = new MusicAlbum(22, 'name', 'author', 7000);
  cart.add(musicAlbum1);
  cart.add(musicAlbum2);
  cart.add(musicAlbum3);
  expect(cart.totalCostWithDiscount(50)).toBe(5000);
});

test('should delete item by id', () => {
  const cart = new Cart();
  const musicAlbum1 = new MusicAlbum(11, 'name', 'author', 1000);
  const musicAlbum2 = new MusicAlbum(14, 'name', 'author', 2000);
  const musicAlbum3 = new MusicAlbum(22, 'name', 'author', 7000);
  cart.add(musicAlbum1);
  cart.add(musicAlbum2);
  cart.add(musicAlbum3);
  cart.deleteFromCart(14);
  expect(cart.items.length).toBe(2);
});
