import images from "../../Components/Images";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs
      .sendForm("service_v8xww9j", "template_cot7jpf", form.current, {
        publicKey: "sbkFJ3SGMzbAVcPrw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent successfully!");
          form.current.reset(); // Clear the form
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email: " + error.text);
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <section
        className="getin-touch"
        style={{
          backgroundImage: `url('${images.formbghome}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section>
          <div className="container position-relative">
            <div className="getin-touch-wrap rounded-2 position-relative">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <img
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      display: "block",
                    }}
                    src={images.arimages}
                    alt=""
                  />
                </div>
                <div
                  className="col-lg-6 get-in-touch wow fadeInUp white-bg py-4"
                  data-wow-delay="0.4s"
                >
                  <div>
                    <h6
                      className="body-font  mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      Any question?
                    </h6>
                    <h2 className="black visible-slowly-right fw-bold d-block mb-xxl-4 mb-lg-3 mb-2">
                      Send us Message
                    </h2>
                  </div>
                  <form
                    className="row g-xxl-4 g-3"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <div className="col-lg-12">
                      <input
                        type="text"
                        placeholder="Your Name"
                        id="form_name1"
                        name="user_name"
                        required
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^a-zA-Z\s]/g,
                            ""
                          );
                        }}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        id="form_email1"
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^a-zA-Z0-9@.]/g,
                            ""
                          );
                        }}
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="tel"
                        placeholder="Your Number"
                        name="number"
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^0-9]/g,
                            ""
                          );
                          if (e.target.value.length > 10) {
                            e.target.value = e.target.value.slice(0, 10);
                          }
                        }}
                      />
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        id="form_message1"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        required
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(
                            /[^a-zA-Z\s]/g,
                            ""
                          );
                        }}
                      ></textarea>
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="common-btn w-100 d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Form;
