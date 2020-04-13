<template>
  <Layout>
    <h1>Contact us</h1>
    <p>This is my contact page</p>
    <form action="https://getform.io/f/e5237acd-3422-4719-96df-dbdf6c5c2cc7" method="POST">

      <input class="form-input" type="text" name="name" placeholder="Your Name">
      <input class="form-input" type="email" name="email" placeholder="Your Email">
      <button class="inline-block py-2 px-4 bg-blue-500 text-white" type="submit">Signup</button>

    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact us'
  }
}
</script>
