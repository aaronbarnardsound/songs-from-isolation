<script>
  import { fade } from "svelte/transition";
  import tracks from "./content";
</script>

<style>
  @font-face {
    font-family: "Dank Mono";
    src: url("/dankmono.otf");
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "Dank Mono";
    box-sizing: border-box;
  }

  main {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  header {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  h2 {
    color: #282828;
    margin: 1rem;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;
  }

  section {
    display: flex;
  }

  div.description {
    padding: 0 1rem;
    width: 40%;
  }

  ul {
    list-style-type: none;
  }

  ul.tracks {
    height: 88vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
      /* #ff71ce,
      #e9eaeb, */ #05ffa1,
      #b967ff /* #01cdfe, */ /* #fffb96, */ /* #ff0563 */
    );
    margin: 0 0.5rem;
    padding: 0 2rem;
    overflow: scroll;
  }

  ul.tracks li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    background: white;
  }

  div.musicians {
    display: flex;
    margin: 0.5rem 0;
  }

  div.musicians ul {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;
  }
</style>

<main in:fade>
  <header>
    <h2>Songs from Isolation</h2>
  </header>
  <section>
    <div class="description">
      <p>
        There are many bored musicians at home right now due to the
        unprecedented COVID-19 spread...
      </p>
      <p>
        Seems like a unique opportunity to collaborate digitally, across borders
        and release a
        <b>new piece of music every day...</b>
      </p>
      <p>
        If you are a creative and would like to participate in any way, let's
        collab!
      </p>
      <p>shoot us an email: songsfromisolation@gmail.com</p>
    </div>
    <ul class="tracks">
      {#each tracks as { date, name, description, embed, musicians }}
        <li in:fade={{ duration: 4000 }}>
          <h3>{date} - {name}</h3>
          <p>{description}</p>
          <div class="musicians">
            <span>Musicians:</span>
            <ul>
              {#each musicians as musician}
                <a
                  href={musician.link}
                  target="_blank"
                  rel="noreferrer noopener">
                  {musician.name}
                </a>
              {/each}
            </ul>
          </div>
          {@html embed}
        </li>
      {/each}
    </ul>
  </section>
</main>
