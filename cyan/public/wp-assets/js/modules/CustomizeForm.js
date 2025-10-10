import { errorToast, successFormToast } from "../modules/toastify";

export function CustomizeProject() {
  const MakeProjectForm = document.getElementById("make_project_form");
  if (!MakeProjectForm) return;

  MakeProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(MakeProjectForm, e.submitter);

    formData.append("_nonce", restDetails.nonce);
    jQuery(($) => {
      $.ajax({
        type: "POST",
        url: restDetails.url + "cynApi/v1/projectForm",
        cache: false,
        processData: false,
        contentType: false,
        data: formData,
        success: () => {
          // console.log(res);
          successFormToast.showToast();
          MakeProjectForm.reset();
                    console.log(success);

        },

        error: (error) => {
          errorToast.showToast();
          console.log(error);
        },
      });
    });
  });
}

CustomizeProject();
